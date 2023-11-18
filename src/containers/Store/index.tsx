/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Button2,
  Button3,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Info,
  Input,
  Products,
  Product,
  Header,
  Title,
  Upload,
  UploadContainer,
  ProductContent,
} from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import UploadIcon from "@icons/Upload2";
import Icon from "@components/Icon";
import DeleteIcon from "@icons/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@icons/Edit";
import { productsData } from "@mocks/products";
import Image from "next/image";
import Modal from "@components/Modal";
import EditProductModal from "@components/Modal/Edit Product";
import { Backdrop } from "@mui/material";
import Cookies from "js-cookie";

const Profile = () => {
  const router = useRouter();
  const [openPopup2, setOpenPopup2] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState<any>();
  const [searchText, setSearchText] = useState("");
  const [deletedId, setDeletedId] = useState(0);
  const [editId, setEditId] = useState(0);
  const [currentProduct, setCurrentProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/products`, config)
      .then((response) => {
        //console.log(response.data.data);
        //setProducts(response.data.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          router.push("/login");
          Cookies.remove("loggedIn");
        } else {
          console.log(error.response);
        }
      });
    setIsLoading(false);
  };

  const addProduct = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/products`, formData, config)
      .then((response) => {
        console.log(response.data);
        fetchProducts();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    setName("");
    setFileName("");
    setPrice(undefined);
    setImage("");
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
      setImage(event.target.files[0]);
    }
  };

  const handleChange = (value: any) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value: any) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setProducts(productsData);
    } else {
      const filteredData: any = productsData.filter((item: any) => {
        return Object.keys(item).some((key) => {
          return /* excludeColumns.includes(key) ? false : */ item[key]
            .toString()
            .toLowerCase()
            .includes(lowerCaseValue);
        });
      });
      setProducts(filteredData);
    }
  };

  const handleEditProduct = (product: any, id: any) => {
    setEditId(id);
    setCurrentProduct(product);
    setOpenPopup2(true);
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteMatch = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .delete(`${BASE_URL}/admins/products/${deletedId}`, config)
      .then((response) => {
        //console.log(response.data.data);
        fetchProducts();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    setOpenDialog(false);
  };

  return (
    <Container>
      <Header>
        <Content>
          <Info style={{ width: "150%" }}>
            <h2>اسم المنتج</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </Info>
          <Info>
            <h2>صور المنتج</h2>
            <UploadContainer>
              <div style={{ width: "100%" }}>
                <label htmlFor="file-input" style={{ width: "100%" }}>
                  <Upload>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      {fileName}
                    </div>
                    <Icon>
                      <UploadIcon />
                    </Icon>
                  </Upload>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </UploadContainer>
          </Info>
          <Info>
            <h2>السعر</h2>
            <input
              value={price ? price : ""}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </Info>
        </Content>
        <Button onClick={addProduct}>إضافة إلى المتجر</Button>
      </Header>

      <Input>
        <Image src={"/images/search.svg"} alt="sa" width={18} height={18} />
        <input
          type="text"
          placeholder="ابحث عن منتج ..."
          value={searchText}
          onChange={(e: { target: { value: any } }) =>
            handleChange(e.target.value)
          }
        />
      </Input>
      <Products>
        {products.map((product: any, idx: number) => (
          <Product key={`${idx}`}>
            <ProductContent bk={product.image}>
              <Title>
                <EditButton
                  onClick={() => handleEditProduct(product, product.id)}
                >
                  <Icon>
                    <EditIcon />
                  </Icon>
                </EditButton>
                <DeleteButton onClick={() => handleOpenDialog(product.id)}>
                  <p>حذف</p>
                  <Icon>
                    <DeleteIcon />
                  </Icon>
                </DeleteButton>
              </Title>
            </ProductContent>
            <h1>{product.name}</h1>
            <h1 dir="ltr">{product.price} L.E</h1>
          </Product>
        ))}
      </Products>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span style={{ fontSize: "24px", fontFamily: "Arb-Regular" }}>
            هل انت متأكد من حذف المنتج؟
          </span>
        </DialogTitle>

        <DialogActions style={dialogStyles2}>
          <Button3 onClick={deleteMatch}>تأكيد</Button3>
          <Button2 onClick={handleCloseDialog} autoFocus>
            رجوع
          </Button2>
        </DialogActions>
      </Dialog>

      {openPopup2 && (
        <Modal onClose={() => setOpenPopup2(false)}>
          <EditProductModal
            onClose={() => setOpenPopup2(false)}
            products={products}
            fetchProducts={fetchProducts}
            currentId={editId}
            product={currentProduct}
            setIsLoading={setIsLoading}
          />
        </Modal>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(true)}
      >
        <div className="loading"></div>
      </Backdrop>
    </Container>
  );
};

export default Profile;

const dialogStyles2 = {
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  gap: "8px",
  padding: "12px 76px",
};

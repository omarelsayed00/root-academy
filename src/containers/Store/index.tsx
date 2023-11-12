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

const Profile = () => {
  const router = useRouter();
  const [openPopup2, setOpenPopup2] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>();
  const [searchText, setSearchText] = useState("");
  const [deletedId, setDeletedId] = useState(0);
  const [currentId, setCurrentId] = useState(0);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
      setImage(URL.createObjectURL(event.target.files[0]));
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

  const handleEditProduct = (id: any) => {
    setCurrentId(id);
    setOpenPopup2(true);
  };

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: name,
      image: image,
      price: price,
    };
    setName("");
    setFileName("");
    setPrice(undefined);
    setImage("");

    setProducts([...products, newProduct]);
  };

  const handleOpenDialog = (id: any) => {
    setDeletedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteMatch = () => {
    setProducts((users) =>
      users.filter((user) => {
        return user.id !== deletedId;
      })
    );
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
                <EditButton onClick={() => handleEditProduct(product.id)}>
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
            setProducts={setProducts}
            currentId={currentId}
            product={products.filter((product) => {
              return product.id === currentId;
            })}
          />
        </Modal>
      )}
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

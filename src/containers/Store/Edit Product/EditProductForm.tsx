/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import Buttonmui from "@mui/material/Button";
import { FormEvent, Fragment, useState, useContext, useEffect } from "react";
import {
  Actions,
  Form,
  FormContent,
  Input,
  InputControl,
  Button,
  Button2,
  Details,
  ImageContainer,
  Content,
  UploadContainer,
  Upload,
} from "./EditProductStyles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import Image from "next/image";
import Icon from "@components/Icon";
import UploadIcon from "@icons/Upload2";

const fileTypes = ["JPG", "PNG", "GIF"];

const EditProductForm = (props: any) => {
  const [product, setPoduct] = useState(props.product);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [fileName, setFileName] = useState("");
  const { BASE_URL } = process.env;

  useEffect(() => {
    console.log(props.product);
  }, []);

  const editProduct = async () => {
    props.setIsLoading(true);
    const formData = new FormData();
    formData.append("_method", "put");
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .post(`${BASE_URL}/admins/products/${props.currentId}`, formData, config)
      .then((response) => {
        console.log(response.data);
        props.fetchProducts();
      })
      .catch((error) => {
        console.log(error.response);
      });
    props.setIsLoading(false);
    props.onClose();
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Fragment>
      <Form>
        <FormContent>
          <Content>
            <Details>
              <InputControl>
                <h1>اسم المنتج</h1>
                <Input
                  value={name}
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </InputControl>
              <InputControl>
                <h1>صورة المنتج</h1>
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
              </InputControl>
              <InputControl>
                <h1>السعر</h1>
                <Input
                  value={price}
                  type="text"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </InputControl>
            </Details>
            <ImageContainer>
              {image && <img src={image} alt="Product Image" />}
              <p>{fileName}</p>
            </ImageContainer>
          </Content>

          <br />
          <Actions>
            <Button type="button" onClick={editProduct}>
              تأكيد
            </Button>
            <Button2 type="button" onClick={props.onClose}>
              رجوع
            </Button2>
          </Actions>
        </FormContent>
      </Form>
    </Fragment>
  );
};

export default EditProductForm;

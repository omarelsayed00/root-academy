/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { MLContainer, MLHeader, MLStyled } from "./styles";
import axios from "axios";
import AuthContext from "src/context/AuthContext";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";

import Icon from "@components/Icon";

import CloseIcon from "@icons/Close";
import EditProductForm from "@containers/Store/Edit Product/EditProductForm";

const EditProductModal = (props: any) => {
  return (
    <MLStyled>
      <MLContainer>
        <MLHeader>
          <div className="icon">
            <Icon onClick={props.onClose}>
              <CloseIcon />
            </Icon>
          </div>
        </MLHeader>
        <EditProductForm
          onClose={props.onClose}
          products={props.products}
          setProducts={props.setProducts}
          product={props.product}
        />
      </MLContainer>
    </MLStyled>
  );
};

export default EditProductModal;

import { css, keyframes } from "@stitches/react";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  maxWidth: "100vw",
  height: "80vh",
  marginLeft: "auto",
  alignItems: "center",
  justifyContent: "center",

  p: {
    color: "white",
    fontSize: "1.5rem",
    width: "50%",
    textAlign: "center",
  },

  span: {
    background:
      "linear-gradient(to right, rgb(57, 246, 235), rgb(17, 132, 239))",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "bold",
    // textShadow: "rgb(18, 119, 151) 2px 0rem 1rem",
  },

  h1: {
    color: "#7E8795",
    fontSize: "0.75rem",
    marginBottom: "1rem",
    backgroundColor: "#070B12",
    padding: "0.65rem 2rem",

    gap: "0.8rem",

    borderRadius: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  textarea: {
    height: "20vh",
    width: "100vh",
    marginTop: "2rem",
    textAlign: "start",
    background:
      "linear-gradient(304.78deg, rgba(13, 14, 13, 0.44) -6.31%, rgba(178, 191, 171, 0) 110.8%)",
    backdropFilter: "blur(2.8586rem)",
    borderRadius: "0.5rem",
    color: "white",
    padding: "0.5rem",
    border: "0 none",
    outline: "0",
    fontWeight: "semi-bold",

    borderWidth: "0px 1px",
    borderTopStyle: "initial",
    borderBottomStyle: "initial",
    borderTopColor: "initial",
    borderBottomColor: "initial",
    borderImage: "initial",
    borderLeftStyle: "solid",
    borderLeftColor: "rgba(245, 251, 242, 0.1)",
    borderRightStyle: "solid",
    borderRightColor: "rgba(245, 251, 242, 0.267)",

    resize: "none",
  },

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    maxHeight: "30vh",
    width: "100vw",
    color: "white",
    marginTop: "2rem",
  },
});
const scaleUpVerCenter = keyframes({
  "0%": {
    transform: "translateY(0px)",
  },
  "100%": {
    transform: "translateY(-20px)",
  },
});

const scaleout = keyframes({
  "0%": {
    transform: "scale(0)",
  },
  "100%": {
    transform: "scale(1)",
    opacity: "0",
  },
});

const pulse = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "50%": {
    transform: "scale(1.1)",
  },
  "100%": {
    transform: "scale(1)",
  },
});

export const ErrorMensage = styled("div", {
  p: {
    padding: "10px",
    backgroundColor: "#F66358",
    borderRadius: "3px",
    margin: "10px",
    fontSize: "15px",
    color: "#fff",
    animation: `${scaleUpVerCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
});

export const ButtonReescrever = styled("button", {
  placecontent: "flex-start center",
  flexshrink: 0,
  display: "flex",
  marginTop: "1rem",
  maxWidth: "400px",
  width: "100%",
  gap: "6px",
  "-webkit-box-align": "center",
  alignItems: "center",
  "-webkit-box-pack": "center",
  flexDirection: "row",
  borderRadius: "8px",
  border: "1px solid rgb(3, 194, 224)",
  textDecoration: "none",
  padding: "14px",
  fontSize: "14px",
  backgroundColor: "rgb(3, 194, 224)",
  transition: "all 0.2s ease-in-out 0s",
  color: "rgb(255, 255, 255)",
  textAlign: "center",
  justifyContent: "center",
  alignItem: "center",
  fontWeight: "medium",
  cursor: "pointer",

  boxShadow: "rgb(18, 119, 151) 0px 0.625rem 2.6875rem",

  "&:hover": {
    backgroundColor: "transparent",
  },

  "&:disabled": {
    backgroundColor: "red",
    cursor: "not-allowed",
  },
});

export const ResultContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",

  p: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAnchor: "center",
    margin: "100px 0",
    width: "50%",
    color: "white",

    fontSize: "16px",
    marginTop: "0rem",
    // border: "1px solid red",
  },
});

export const Button = styled("button", {
  width: "40px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "#fff",

  borderRadius: "4px",
  backgroundColor: "rgb(3, 194, 224)",
  cursor: "pointer",
  marginBottom: "10px",
  border: "1px solid rgb(3, 194, 224)",

  boxShadow: "rgb(18, 119, 151) 0px 0.3rem 2rem",

  variants: {
    active: {
      true: {
        backgroundColor: "green",
        transition: "background-color 0.2s ease-in-out",
        boxShadow: "green 0px 0.3rem 2rem",
        border: "none",
      },
    },
  },
});

export const Spinner = styled("div", {
  div: {
    width: "40px",
    height: "40px",
    margin: "500px auto",
    backgroundColor: "#333",
    borderRadius: "100%",
    animation: `${scaleout} 1s infinite ease-in-out`,
    animationName: `${scaleout}`,
    position: "absolute",
    top: "20px",
  },
});

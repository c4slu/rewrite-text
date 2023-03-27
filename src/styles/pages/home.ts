import { keyframes } from "@stitches/react";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "100vw",
  marginLeft: "auto",
  minHeight: "100vh",
  height: "100%",
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

  button: {
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

export const ResultContainer = styled("div", {
  p: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAnchor: "start",
    height: "200px",
    margin: "100px 0",
    width: "100vw",
    color: "white",
    padding: "0rem 10rem",
    fontSize: "16px",
    marginTop: "0rem",
    // border: "1px solid red",
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

export const Spinner = styled("div", {
  div: {
    width: "40px",
    height: "40px",
    margin: "100px auto",
    backgroundColor: "#333",
    borderRadius: "100%",
    animation: `${scaleout} 1s infinite ease-in-out`,
    animationName: `${scaleout}`,
  },
});

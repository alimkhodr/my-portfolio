import { styled } from "@mui/material";
import { ReactNode, MouseEventHandler } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  border: "none",
  borderRadius: "10px",
  padding: "5px 15px",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: theme.palette.primary.contrastText,
  transition: "0.6s",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default StyledButton;

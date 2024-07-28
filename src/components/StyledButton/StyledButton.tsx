import { styled } from "@mui/material";
import { ReactNode, MouseEventHandler } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "10px",
  padding: "5px 15px",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: theme.palette.primary.contrastText,

  transition: "background-color 0.5s ease, transform 0.5s ease, border 0.5s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    transform: "scale(1.05)",
    border: "none",
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default StyledButton;

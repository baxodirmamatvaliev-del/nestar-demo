import withLayoutBasic from "@/libs/components/layout/LayoutBassic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Propertylist: NextPage =() => {
    return(
        <>
          <Container>PROPERTY LIST</Container>
        </>
    )
}

export default  withLayoutBasic(Propertylist);
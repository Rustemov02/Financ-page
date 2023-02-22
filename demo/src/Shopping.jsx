import React from "react";
import { Stack } from "@mui/material";

import ShoppingHead from "./ShoppingHead";
import ShoppinBox from "./ShoppingBox";

export default function Shopping() {



    return (
        <Stack width='80%' margin='auto' alignItems='center' padding={7}>
            <ShoppingHead/>
            <ShoppinBox/>
        </Stack>
    )
}
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={shades.primary[500]}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color="white"
          >
            RECommerce
          </Typography>
          <Box>
            <Typography mb="30px" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            About Us
          </Typography>
          <Typography mb="30px" color="white">Careers</Typography>
          <Typography mb="30px" color="white">Our Stores</Typography>
          <Typography mb="30px" color="white">Terms & Conditions</Typography>
          <Typography mb="30px" color="white">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            Customer Care
          </Typography>
          <Typography mb="30px" color="white">Help Center</Typography>
          <Typography mb="30px" color="white">Track Your Order</Typography>
          <Typography mb="30px" color="white">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px" color="white">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            Contact Us
          </Typography>
          <Typography mb="30px" color="white">
            Jl. Melinjo Raya Sektor 1.6 BSD City
          </Typography>
          <Typography mb="30px" color="white" sx={{ wordWrap: "break-word" }}>
            Email: workdionisius@gmail.com
          </Typography>
          <Typography mb="30px" color="white">+62 878-6929-9259</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

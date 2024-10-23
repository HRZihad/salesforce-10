import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

{
  /* <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" />
<Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" /> */
}
{
  /* <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" />
<Avatar alt="Cindy Baker" src="https://i.ibb.co.com/dct3Xg2/8.png" /> */
}

const data = [
  {
    id: 1,
    invoice_id: 404002,
    invoices_status: "unsent",
    amount: 80770,
    imgUrl: "https://i.ibb.co/YcXc5Cg/1.png",
    customer_details: [
      { customer_name: "lutfor rahman", customer_position: "ceo" },
    ],
    company_name: "BlueRock",
    company_logo:
      "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
    subtotal: 53154,
    total: 53154,
    balance_due: 53154,
  },
  {
    id: 2,
    invoice_id: 426001,
    customer_details: [
      { customer_name: "Jalal Nuri", customer_position: "Marketing manager" },
    ],
    invoices_status: "unsent",
    amount: 80770,
    imgUrl: "https://i.ibb.co.com/GPrhFkv/2.png",
    company_name: "IT-Corner",
    company_logo: "https://i.ibb.co.com/g6G9fvz/it-corner.png",
    subtotal: 63155,
    total: 63155,
    balance_due: 53154,
  },
  {
    id: 3,
    invoice_id: 576001,
    customer_details: [
      {
        customer_name: "Mohammad Didar",
        customer_position: "Marketing manager",
      },
    ],
    invoices_status: "viewed",
    amount: 80770,
    imgUrl: "https://i.ibb.co.com/xfGjJyz/3.png",
    company_name: "IT-Corner",
    company_logo: "https://i.ibb.co.com/g6G9fvz/it-corner.png",
    subtotal: 63155,
    total: 63155,
    balance_due: 53154,
  },
  {
    id: 4,
    invoice_id: 146001,
    customer_details: [
      { customer_name: "Shorif Ahmed", customer_position: "Marketing manager" },
    ],
    invoices_status: "unsent",
    amount: 80770,
    imgUrl: "https://i.ibb.co.com/nfFG5fL/4.png",
    company_name: "IT-Corner",
    company_logo: "https://i.ibb.co.com/g6G9fvz/it-corner.png",
    subtotal: 63155,
    total: 63155,
    balance_due: 53154,
  },
];

// three dot menu option start here
const threeDotMenuOption = ["Option 1", "Option 2", "Option 3"];

const ITEM_HEIGHT = 48;
// three dot menu option end here

const CaseCard = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  // for show the three dot menu option start here
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  // for show the three dot menu option end here

  // for navigate the tab

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // for show the three dot menu option end here

  // console.log("check the bgcolor is get: ", theme.palette.primary.cardLightBg);

  return (
    <Box className=" flex flex-col gap-y-4 ">
      {/* card content section */}
      <Box className=" flex items-center justify-center">
        <Box
          className="  rounded-[35px] overflow-hidden w-full " // there will be changed******
          sx={{ bgcolor: theme.palette.primary.cardLightBg }}
        >
          <Box className="lg:flex w-full ">
            <Box className="flex-2 bg-[#E8F1FF] lg:w-[40%]">
              <Box
                className=" h-full lg:rounded-tr-[20px] pl-6 md:pl-8  lg:px-10 py-6"
                sx={{
                  color: theme.palette.text.black,
                  bgcolor: theme.palette.primary.cardLightBg,
                }}
              >
                <Typography
                  sx={{ fontSize: "23px", fontWeight: "600", mt: "5px" }}
                >
                  New Case Management
                </Typography>
              </Box>
            </Box>

            {/* middle section  */}
            <Box className="flex-[1.5] w-auto lg:bg-[#E8F1FF] lg:rounded-bl-[30px] lg:rounded-br-[30px] ml-3 md:ml-5 lg:ml-0  px-2">
              <Box className=" flex items-center lg:justify-center">
                {/* middle tab section here  */}
                <Box className=" flex items-center gap-x-2 mb-2">
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co/YcXc5Cg/1.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#83A2DB",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        2
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co.com/GPrhFkv/2.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#83A2DB",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        1
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co.com/xfGjJyz/3.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EA6863",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        1
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co.com/nfFG5fL/4.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EA6863",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        3
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co.com/8KLgrT2/5.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EEF1F7",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.black,
                          fontSize: "15px",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co.com/HNvMtzP/6.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EA6863",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        2
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.ibb.co.com/RjY0Tzt/7.png"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EEF1F7",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.black,
                          fontSize: "15px",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                  {/* <Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" /> */}
                </Box>
              </Box>
            </Box>
            {/* right side  */}
            <Box className="flex-2 bg-[#E8F1FF] w-[40%]">
              <Box
                className=" h-full lg:rounded-tl-[20px]"
                sx={{ bgcolor: theme.palette.primary.cardLightBg }}
              >
                <Box
                  className=" flex items-center lg:justify-end pl-4 md:pl-6 lg:pl-0 lg:px-6 py-3"
                  sx={{ color: theme.palette.primary.semiWhite }}
                >
                  {/* right side icon section  */}
                  <Box className=" flex items-center gap-x-2">
                    {/* icon 1  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    {/* icon 2  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <DriveFolderUploadIcon
                        sx={{ color: theme.palette.icon.iconColor }}
                      />
                    </IconButton>
                    {/* icon 3  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <CalendarTodayIcon
                        sx={{ color: theme.palette.icon.iconColor }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* card content section  */}
          <Box className="px-[30px] mb-5">
            {/* card content section will be here  */}
            <Box className=" grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-4 gap-4 mt-4">
              {/* box 1  */}

              <Box className="flex flex-col h-full">
                <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  Case Allocation
                </Typography>
                <Box
                  className="  rounded-3xl flex-1"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.semiWhite,
                  }}
                >
                  <Box className=" flex flex-col gap-y-[60px] px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar  */}
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography sx={{ color: theme.palette.text.black }}>
                      Allocate case to user
                    </Typography>
                  </Box>

                  {/* divider  */}
                  <Divider variant="middle" />

                  <Box className=" flex flex-col gap-y-[60px] px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar  */}
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon sx={{ fontSize: "18px" }} />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography sx={{ color: theme.palette.text.black }}>
                      Acknowledge Case reciept to customer
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* box 2 */}
              <Box className="flex flex-col h-full">
                <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  Issue Identification
                </Typography>
                <Box
                  className="  rounded-3xl flex-1"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.text.black,
                  }}
                >
                  {/* box 2 content  */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar and text  */}
                      <Box className=" flex w-[50%] items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography sx={{ color: theme.palette.text.black }}>
                          Identify Issue Category
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  {/* box 2 content  */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar and text  */}
                      <Box className=" flex w-[50%] items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography sx={{ color: theme.palette.text.black }}>
                          Identify Issue Severity
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  {/* box 2 content  */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar and text*/}
                      <Box className=" flex w-[50%]  items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography sx={{ color: theme.palette.text.black }}>
                          Identify Issue Impact
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  {/* box 2 content  */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar with text*/}
                      <Box className=" w-[70%] flex items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co.com/xfGjJyz/3.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography
                          sx={{
                            fontWeight: "600",
                            color: theme.palette.text.black,
                          }}
                        >
                          Allocate to Resolution Team
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  {/* box 2 content  */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar with text*/}
                      <Box className=" w-[70%] flex items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co.com/nfFG5fL/4.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography
                          sx={{
                            fontWeight: "600",
                            color: theme.palette.text.black,
                          }}
                        >
                          Advise Customer of Resolution estimate
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* box 3 */}
              <Box className="flex flex-col h-full">
                <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  Technical Resolution
                </Typography>
                <Box
                  className="  rounded-3xl px-6 py-4 flex flex-1 flex-col gap-y-[37px]"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.text.black,
                  }}
                >
                  {/* 3rd box content  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    <Typography sx={{ color: theme.palette.text.black }}>
                      Identify Issue Dependencies
                    </Typography>
                  </Box>
                  {/* 3st box content  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    <Typography sx={{ color: theme.palette.text.black }}>
                      Identify Issue Resolution
                    </Typography>
                  </Box>
                  {/* 3rd box content with avatar  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    {/* avatar  */}
                    <Box>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://i.ibb.co.com/RjY0Tzt/7.png"
                        sx={{ width: 50, height: 50 }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "600" }}>
                      Estimate Resolution Time
                    </Typography>
                  </Box>
                  {/* 3rd box content with avatar  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    {/* avatar  */}
                    <Box>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://i.ibb.co.com/HNvMtzP/6.png"
                        sx={{ width: 50, height: 50 }}
                      />
                    </Box>
                    <Typography sx={{ color: theme.palette.text.black }}>
                      Advice Customer of Resolution Estimate
                    </Typography>
                  </Box>
                  {/* 3rd box content  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    <Typography sx={{ color: theme.palette.text.black }}>
                      Identify Issue Resolution
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* box 4 */}
              <Box className="flex flex-col h-full">
                <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  New Task
                </Typography>
                <Box
                  className="  rounded-3xl flex-1 px-6 py-4 w-full grid grid-cols-1 md:grid-cols-2 gap-3"
                  sx={{
                    // bgcolor: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`,
                    color: theme.palette.text.black,
                  }}
                >
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 py-4 flex items-center"
                    sx={{
                      bgcolor: theme.palette.primary.cardBg,
                      color: theme.palette.text.white,
                    }}
                  >
                    <Typography>Request Processing</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 py-4 flex items-center"
                    sx={{ bgcolor: theme.palette.primary.main }}
                  >
                    <Typography>Problem Resolution</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 xl:px-4 2xl:px-6 py-4 flex items-center overflow-hidden"
                    sx={{ bgcolor: theme.palette.primary.main }}
                  >
                    <Typography sx={{wordBreak: "break-word"}}>Customer Communication</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 py-4 flex items-center"
                    sx={{ bgcolor: theme.palette.primary.main }}
                  >
                    <Typography>Testing and Verification</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 py-4 flex items-center"
                    sx={{ bgcolor: theme.palette.primary.main }}
                  >
                    <Typography>Customer Notification</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 py-4 flex items-center"
                    sx={{ bgcolor: theme.palette.primary.main }}
                  >
                    <Typography>Customer Satisfaction</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* card bottom content section will be here  */}
            <Box className="hidden xxl:grid grid-cols-4 gap-4 mt-10  ">
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>
                  Case Allocation
                </Typography>
              </Box>
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>
                  Issue Identification
                </Typography>
              </Box>
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>
                  Technical Resolution
                </Typography>
              </Box>
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>New Task</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CaseCard;

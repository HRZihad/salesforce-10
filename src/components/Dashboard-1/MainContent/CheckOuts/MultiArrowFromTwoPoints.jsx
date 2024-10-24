import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Xarrow, { Xwrapper } from "react-xarrows";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import DndNewTaskCard from "./DndNewTaskCard";

const DraggableParentWithFixedChildren = () => {
  const theme = useTheme();
  const [parentPosition, setParentPosition] = useState({ x: 0, y: 0 });
  const [outsideParentPosition, setOutsideParentPosition] = useState({
    x: 0,
    y: 0,
  });
  const [parentPosition3, setParentPosition3] = useState({ x: 0, y: 0 });
  const [outsideParentPosition4, setOutsideParentPosition4] = useState({
    x: 0,
    y: 0,
  });

  const handleParentDrag = (e, data) => {
    setParentPosition({ x: data.x, y: data.y });
  };

  const handleOutsideParentDrag = (e, data) => {
    setOutsideParentPosition({ x: data.x, y: data.y });
  };
  const handleParentDrag3 = (e, data) => {
    setParentPosition3({ x: data.x, y: data.y });
  };

  const handleOutsideParentDrag4 = (e, data) => {
    setOutsideParentPosition4({ x: data.x, y: data.y });
  };

  // const HalfCircle = () => (
  //   <svg width="100" height="50" viewBox="0 0 100 50">
  //     <path d="M 0 50 A 50 50 0 0 1 100 50" fill="red" />
  //   </svg>
  // );

  return (
    <Xwrapper>
      <Box className=" grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-4 gap-10 mt-4 bg-[#DBE5F2] py-5 px-4">
        {/* Draggable Parent for Outside Elements */}
        <Draggable
          position={outsideParentPosition}
          onDrag={handleOutsideParentDrag}
          className="flex flex-col h-full"
          bounds={{ left: -20, right: 200, top: 0, bottom: 0 }}
        >
          <Box style={outsideParentStyle}>
            <Box className="flex flex-col h-full">
              <Typography
                className="xxl:hidden pb-2"
                sx={{ fontWeight: "600" }}
              >
                Case Allocation
              </Typography>
              <Box
                className="  rounded-3xl flex-1 xl:flex xl:flex-col xl:justify-between cursor-move"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.semiWhite,
                }}
              >
                <Box
                  id="elementOutside1"
                  className="flex items-center justify-between cursor-move"
                >
                  <Box className=" flex flex-col gap-y-[60px] px-6 py-4 w-full">
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
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>

                {/* divider  */}
                <Divider variant="middle" />

                <Box
                  id="elementOutside2"
                  className="flex items-center justify-between cursor-move"
                >
                  <Box className=" flex flex-col gap-y-[60px] px-6 py-4 xl:pb-10 w-full">
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
                  {/* empty content circle  */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Draggable>
        {/* Draggable Parent Element */}
        <Draggable
          position={parentPosition}
          onDrag={handleParentDrag}
          bounds={{ left: -200, right: 200, top: 0, bottom: 0 }}
          className="flex flex-col h-full"
        >
          <Box style={parentStyle}>
            <Box className="flex flex-col h-full">
              <Typography
                className="xxl:hidden pb-2"
                sx={{ fontWeight: "600" }}
              >
                Issue Identification
              </Typography>
              <Box
                className="  rounded-3xl flex-1 cursor-move"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.text.black,
                }}
              >
                <Box
                  id="child1"
                  className="flex items-center justify-between cursor-move"
                >
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
                  <Box className=" px-6 py-4 w-[100%]">
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
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>
                <Box
                  id="child2"
                  className="flex items-center justify-between cursor-move"
                >
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  <Box className=" px-6 py-4 w-[100%]">
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
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>
                <Box
                  id="child3"
                  className="flex items-center justify-between cursor-move"
                >
                  {/* circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
                  <Box className=" px-6 py-4 w-[100%]">
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
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>

                <Box
                  id="child4"
                  className="flex items-center justify-between cursor-move"
                >
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
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
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>

                <Box
                  id="child5"
                  className="flex items-center justify-between cursor-move"
                >
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
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
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Draggable>
        <Draggable
          position={parentPosition3}
          onDrag={handleParentDrag3}
          className="flex flex-col h-full"
          bounds={{ left: -200, right: 200, top: 0, bottom: 0 }}
        >
          {/* box 3 */}
          <Box className="flex flex-col h-full cursor-move">
            <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
              Technical Resolution
            </Typography>
            <Box
              className="  rounded-3xl py-4 flex flex-1 flex-col gap-y-[37px]"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.text.black,
              }}
            >
              {/* 3rd box content  */}
              <Box
                id="child6"
                className="flex items-center justify-between cursor-move"
              >
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                {/* 3rd box content */}
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
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
              </Box>
              {/* 3rd box content  */}
              <Box
                id="child7"
                className="flex items-center justify-between cursor-move"
              >
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                {/* 3rd box content */}
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
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
              </Box>
              {/* 3rd box content  */}
              <Box
                id="child8"
                className="flex items-center justify-between cursor-move"
              >
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
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
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
              </Box>
              {/* 3rd box content  */}
              <Box
                id="child9"
                className="flex items-center justify-between cursor-move"
              >
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
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
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
              </Box>
              {/* 3rd box content  */}
              <Box
                id="child10"
                className="flex items-center justify-between cursor-move"
              >
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
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
                {/* Circle */}
                <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -mr-2"></Box>
              </Box>
            </Box>
          </Box>
        </Draggable>
        <Draggable
          position={outsideParentPosition4}
          onDrag={handleOutsideParentDrag4}
          className="flex flex-col h-full"
          bounds={{ left: -10, right: 10, top: -10, bottom: 10 }}
        >
          {/* box 4 */}
          <Box className="flex flex-col h-full">
            <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
              New Task
            </Typography>
           <Box className="flex-1" sx={{border: "1px solid red"}}>
            <DndNewTaskCard></DndNewTaskCard>
           </Box>
          </Box>
        </Draggable>

        {/* Reversed Arrows: Arrows Connecting Outside 1 and Outside 2 to Children */}
        {/* Arrows from Outside 1 to First Three Children */}
        <Xarrow
          start="elementOutside1"
          end="child1"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          startAnchor="right"
          endAnchor="left"
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="elementOutside1"
          end="child2"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          startAnchor="right"
          endAnchor="left"
          showHead={true}
          showTail={true}
          tailColor="#CE6969"
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="elementOutside1"
          end="child3"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          startAnchor="right"
          endAnchor="left"
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />

        {/* Arrows from Outside 2 to Last Two Children */}
        <Xarrow
          start="elementOutside2"
          end="child3"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          startAnchor="right"
          endAnchor="left"
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="elementOutside2"
          end="child4"
          curveness={0.5}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
          startAnchor="right"
          endAnchor="left"
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="elementOutside2"
          end="child5"
          curveness={0.6}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
          startAnchor="right"
          endAnchor="left"
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        {/* second to third div connection */}
        <Xarrow
          start="child1"
          end="child8"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          showHead={true}
          showTail={true}
          headColor={"#CE6969"}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="child2"
          end="child6"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          showHead={true}
          showTail={true}
          headColor={"#CE6969"}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="child3"
          end="child7"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
          showHead={true}
          showTail={true}
          headColor={"#CE6969"}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="child4"
          end="child8"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
          dashness={true}
        />
        <Xarrow
          start="child5"
          end="child9"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
          dashness={true}
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="child5"
          end="child10"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
          dashness={true}
          showHead={true}
          showTail={true}
          tailShape= {"circle"}
          headShape={"circle"}
        />
        <Xarrow
          start="child8"
          end="child11"
          startAnchor="right"
          endAnchor="left"
          curveness={0.6}
          color="#303030"
          strokeWidth={2}
          headSize={9}
          tailShape= {"circle"}
          tailColor="#CE6969"
          tailSize={3}
          showHead={true}
          showTail={true}
        />
      </Box>
    </Xwrapper>
  );
};

const parentStyle = {
  height: "max-content",
  position: "relative",
  display: "flex",

  flexDirection: "column",
  justifyContent: "space-between",
};

const outsideParentStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
};

export default DraggableParentWithFixedChildren;

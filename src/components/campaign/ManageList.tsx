import React from "react";
import {
  Box,
  styled,
  FormControl,
  Select,
  MenuItem,
  Link,
  Grid,
} from "@mui/material";
import ManageItem from "./ManageItem";
import CampaignList from "../../data/campaign-list.json";
import axios from "axios";

const ManageList = () => {
  const campaignList = CampaignList.ads;
  const [sortedList, setSortedList] = React.useState(campaignList);
  const sortCampaignStatus = (event: any): any => {
    console.log(event.target.value);
    // campaignList={campaignList.filter((note) =>
    //   note.text.toLowerCase().includes(searchText)
    // )}
    const result = campaignList.filter((word) =>
      console.log(word.status === event.target.value)
    );
  };
  return (
    <StyledItem>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value=""
            displayEmpty
            onChange={sortCampaignStatus}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>전체 광고</em>
            </MenuItem>
            <MenuItem value={"active"}>진행중</MenuItem>
            <MenuItem value={"ended"}>종료</MenuItem>
          </Select>
        </FormControl>
        <Link href="/campaign-create" underline="none">
          광고 만들기
        </Link>
      </Box>
      <Grid container spacing={2}>
        <ManageItem props={campaignList} />
      </Grid>
    </StyledItem>
  );
};

export default ManageList;

const StyledItem = styled(Box)(({ theme }) => ({
  paddingBlock: 30,
  paddingInline: 35,
  [theme.breakpoints.down("md")]: {
    marginTop: 20,
    paddingInline: 16,
  },
  background: "#fff",
  minHeight: 400,
  borderRadius: 5,
}));

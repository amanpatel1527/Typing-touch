import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Select from "../utils/Select";
import {

} from "../../constants/Constants";
import { Link } from "@mui/material";
import {
  GITHUB_TOOLTIP_TITLE,
  GITHUB_REPO_LINK,
} from "../../constants/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterMenu = ({
  themesOptions,
  theme,
  handleThemeChange,
}) => {

  return (
    <div className="footer">
      <Grid container justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row">
          <Select
            classNamePrefix="Select"
            value={themesOptions.find((e) => e.value.label === theme.label)}
            options={themesOptions}
            isSearchable={false}
            isSelected={false}
            onChange={handleThemeChange}
            menuPlacement="top"
          ></Select>
        </Box>
        {(
          <Box display="block" flexDirection="row">


            <Tooltip
              title={
                <span style={{ whiteSpace: "pre-line", fontSize: "12px" }}>
                  {GITHUB_TOOLTIP_TITLE}
                  <Link
                    margin="inherit"
                    href="https://github.com/amanpatel1527/touch_typing"
                  >
                    {GITHUB_REPO_LINK}
                  </Link>
                </span>
              }
              placement="top-start"
            >
              <IconButton
                href="https://github.com/amanpatel1527/touch_typing"
                color="inherit"
              >
                <GitHubIcon></GitHubIcon>
              </IconButton>
            </Tooltip>
          </Box>
        )}
        {(
          <Box display="block" flexDirection="row" className="bottom-info">
            <IconButton
              href="https://github.com/amanpatel1527/touch_typing"
              color="inherit"
            >
            </IconButton>
          </Box>
        )}
      </Grid>
    </div>
  );
};

export default FooterMenu;

import { Drawer, Box, useMediaQuery, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

const PrimaryDraw = () => {
  const theme = useTheme();
  const below600 = useMediaQuery("(max-width:599px)");
  const [open, setOpen] = useState(!below600);

  useEffect(() => {
    setOpen(!below600);
  }, [below600]);

  return (
    <Drawer
      open={open}
      variant={below600 ? "temporary" : "permanent"}
      PaperProps={{
        sx: {
          mt: theme.primaryAppBar.height,
          height: `calc(100vh - ${theme.primaryAppBar.height} )`,
        },
      }}
    >
      <Box>
        <Box>
          {[...Array(100)].map((_, i) => (
            <Typography key={i} paragraph>
              {i + 1}
            </Typography>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
export default PrimaryDraw;

import { Stack, Pagination, createTheme, ThemeProvider } from "@mui/material";
import styles from "./paginator.module.scss";
const Paginator = ({ currentPage, handlePageChange, count }) => {
  const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            "& .MuiPaginationItem-root": {
              color: "#fafafa",
              opacity: 0.9,
              borderColor: "#957ead36",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#957ead36",
              borderColor: "#fafafa7e",
              color: "#fafafa",
            },
          },
        },
      },
    },
  });
  return (
    <div className={styles.paginator}>
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Pagination
            count={count}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="secondary"
            size="large"
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default Paginator;

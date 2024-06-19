import AppBar from "@/components/AppBar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {

  return (
    <>
      <AppBar />
      {/* <Container> */}
      {children}
      {/* </Container> */}
      <Footer />
    </>
  )
}

export const getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
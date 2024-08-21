import AppBar from "@/components/AppBar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import PopChatFooter from "@/components/PopChatFooter";
import SafetyAppBar from "@/components/SafetyAppBar";

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {

  return (
    <div className="bg-white">
      <SafetyAppBar />
      {children}
      <PopChatFooter />
    </div>
  )
}

export const getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
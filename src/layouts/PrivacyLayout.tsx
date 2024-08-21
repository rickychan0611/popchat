import AppBar from "@/components/AppBar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import PopChatFooter from "@/components/PopChatFooter";
import PrivacyAppBar from "@/components/PrivacyAppBar";
import SafetyAppBar from "@/components/SafetyAppBar";

const PrivacyLayout: React.FC<{ children: any }> = ({ children }) => {

  return (
    <div className="bg-white">
      <PrivacyAppBar />
      {children}
      <PopChatFooter />
    </div>
  )
}

export const getLayout = (page: any) => <PrivacyLayout>{page}</PrivacyLayout>;

export default PrivacyLayout;
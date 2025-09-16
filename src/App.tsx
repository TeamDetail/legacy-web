import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Router";
import {
  QueryClient as QueryClientV3,
  QueryClientProvider as QueryClientProviderV3,
} from "react-query";
import {
  QueryClient as QueryClientV5,
  QueryClientProvider as QueryClientProviderV5,
} from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { LegacyModal } from "@components/common/LegacyModal";
import useModalStore from "./store/useModalStore";
import MailBox from "@components/mailBox/mailBox";

const queryClientV3 = new QueryClientV3();
const queryClientV5 = new QueryClientV5();

function App() {
  const { modalStoreData, isOpen, setCloseModal } = useModalStore();
  return (
    <QueryClientProviderV5 client={queryClientV5}>
      <QueryClientProviderV3 client={queryClientV3}>
        <BrowserRouter>
          <Routes />
          <LegacyModal isOpen={modalStoreData === "MAIL" && isOpen} $background>
            <MailBox close={() => setCloseModal()} />
          </LegacyModal>
          <ToastContainer theme="dark" />
        </BrowserRouter>
      </QueryClientProviderV3>
    </QueryClientProviderV5>
  );
}

export default App;

import Header from "@/reused/ui/Header/Header";
import Footer from "@/reused/ui/Footer/Footer";
import Main from "@/reused/ui/Main/Main";
import {getDefault} from "@/api/getDefault";
import {ITarifs} from "@/types/tarifs.types";

export default async function Home() {


    const data = await getDefault({
        path: `/Test/GetTariffs`,
    });
    const result: ITarifs[] = JSON.parse(data)
  return (
    <>
     <Header />
     <Main data={result} />
     <Footer />
    </>
  );
}

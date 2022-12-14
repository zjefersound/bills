import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { BillsList } from "../../components/ui/BillsList";
import { Menu } from "../../components/ui/Menu";
import { HomeHeader } from "./components/HomeHeader";

export function Home() {
  return (
    <Screen.Root>
      <Header>
        <Menu />
      </Header>
      <Screen.Section>
        <HomeHeader />
        <BillsList />
      </Screen.Section>
    </Screen.Root>
  );
}

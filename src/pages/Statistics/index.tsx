import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { Menu } from "../../components/ui/Menu";

export function Statistics() {
  return (
    <Screen.Root>
      <Header title="Statistics" goBack>
        <Menu />
      </Header>
      <Screen.Section>
        To do:
        - Bills per month
        - Salary - Bills
        
      </Screen.Section>
    </Screen.Root>
  );
}

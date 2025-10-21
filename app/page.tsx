import Link from "next/link";
import { Base, Container, Header, PageHeading, Stack, TextLink, Table, Checkbox, Td, Th, Input } from "smarthr-ui";

type User = {
  id: number;
  name: string;
}

const data: User[] = [
  {
    id: 1,
    name: "山田太郎"
  },
  {
    id: 2,
    name: "山田花子"
  },
]

export default function Home() {
  return (
    <div>
      <Header />

      <Container>
        <Stack gap={1}>
          <PageHeading type="screenTitle">１つ目のページです</PageHeading>

          <Base padding={2}>
            <TextLink elementAs={Link} href="/another_page">
              ２つめのページに行く
            </TextLink>
          </Base>
        </Stack>

        <Input type="text" />

        <Table>
          <thead>
            <tr>
              <Th>選択</Th>
              <Th>ID</Th>
              <Th>氏名</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr>
                <Td><Checkbox /></Td>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
              </tr>             
            ))} 
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

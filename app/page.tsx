import Link from "next/link";
import { Base, Container, Header, PageHeading, Stack, TextLink } from "smarthr-ui";

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
      </Container>
    </div>
  );
}

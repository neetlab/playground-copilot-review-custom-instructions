import { Base, Container, Header } from "smarthr-ui";

export default function Home() {
  return (
    <div>
      <Header />

      <Container>
        <Base>
          <form action="/login" className="form">
            <label>
              メールアドレス
              <input type="text" />
            </label>

            <label>
              パスワード
              <input type="password" />
            </label>

            <button>ログイン</button>
          </form>
        </Base>
      </Container>
    </div>
  );
}

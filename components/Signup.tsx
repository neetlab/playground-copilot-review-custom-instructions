import { ComponentProps, useState, type FC } from "react"

import { Input, FormControl, Button } from "smarthr-ui"

export const SignUp: FC = (props: ComponentProps<"form">) => {
  return (
    <form {...props}>
      <FormControl title="メールアドレス">
        <Input type="email" /> 
      </FormControl>

      <SignUpPassword />

      <Button type="submit">
        送信
      </Button>
    </form>
  )
}

const SignUpPassword: FC = () => {
  const [password, setPassword] = useState("");

  return (
    <div>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {password.length < 8 && (
        <p>パスワードは8文字以上にしてください</p>
      )}
    </div>
  )
}

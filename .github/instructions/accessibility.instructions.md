---
applyTo: "**/*.ts,**/*.tsx"
---

# アクセシビリティのレビュー観点

SmartHR のデザインシステム「SmartHR UI」では、以下の点に注意して利用する必要があります。さもなければ、アクセシビリティに悪影響が生じ、特定の特性を有したり支援技術を利用するユーザーがタスクを完了できなくなるおそれがあります。

## Table

### 行を選択するチェックボックスやラジオボタンのラベル

`<TdCheckbox>`や`<TdRadioButton>`を用いて`aria-labelledby`で行のオブジェクトを識別するためのテキストを参照してください。

```tsx
<tr key={key}>
  <TdCheckbox aria-labelledby={object.id} />
  <Td>
    <a href={`/hoge/${object.id}`} id={object.id}>{name}</a>
  </Td>
  ...
</tr>
```

## InputFile

InputFileのような入力要素では、入力すべき内容をユーザーに明確に伝えるラベルの提供が必要です。また、スクリーンリーダーなどの支援技術に情報を伝えるためにAccessible Nameも設定してください。
[FormControl](/products/components/form-control/)と組み合わせた使用する場合、`title`でラベルを設定することで、同じ内容がAccessible Nameとしても提供されます。

### InputFileでラベルを提供する

InputFileでは、入力要素として「何を入力すべきか」を示すラベルを[FormControl](/products/components/form-control/)の`title`で設定してください。

InputFileのボタンには「ファイルを選択する」のラベルが表示されますが、この文言だけではユーザーは選択するファイルを特定できません。
アップロードしてほしいファイルの内容をラベルで明示することで、迷わず適切なファイルを選択できます。

<Cluster gap={{ row: 0, column: 1 }}>
  <DoAndDont type="do" width="calc(50% - 8px)">
    <Image slot="img" src={inputFileLabelDo} alt="証明書の写真というラベルとセットで表示されているInputFile" />
    <Text slot="label">アップロードしてほしいファイル「証明書の写真」をラベルで明示します。</Text>
  </DoAndDont>
  <DoAndDont type="dont" width="calc(50% - 8px)">
    <Image slot="img" src={inputFileLabelDont} alt="証明書の種類を選択するSelectと並んだラベルのないInputFile" />
    <Text slot="label">選択すべきファイルを明示しない場合、誤ったデータを入力する危険性があります。</Text>
  </DoAndDont>
</Cluster>

### InputFileでラベルを省略する場合

InputFileを使用する画面・ダイアログなどの領域内において、入力の目的が十分にテキストで説明されており、見た目上のラベルが冗長な情報になると判断できる場合には、見た目上のラベルを省略できます。
ラベルを省略する場合も、Accessible Nameを漏れなく提供するために、以下のような方法で実装してください。

- [FormControl](/products/components/form-control/)の`dangerouslyTitleHidden`を使用して、ラベルを不可視化する
- `aria-label`で、入力する内容を特定できるAccessible Nameを設定する

## Input

### FormControlと併用する
Inputコンポーネントは必ずFormControlコンポーネントと併用して、ユーザーが何を入力すべきかを示すラベルを設定してください。FormControlと併用することで、支援技術にも入力の目的が伝達されます。
  - eslint-plugin-smarthrの[smarthr/a11y-input-in-form-control](https://github.com/kufu/eslint-plugin-smarthr/tree/main/rules/a11y-input-in-form-control/)ルールは、InputにFormControlを組み合わせることを促すものです。支援技術に入力の目的が伝わらないリスクを防ぐため、有効にして使用することを推奨します。

## Icon

アイコンのみ表示する場合、ラベルと合わせて使うよりも認知負荷を与えます。適切なラベルを付与してください。特にリンクやボタンにアイコンのみ表示する場合は必須です。

```tsx editable
<Button variant="primary">
  <FaCirclePlusIcon alt="追加" />
</Button>
```

また、アイコンの色と背景色のコントラスト比は最低でも `3:1` 以上を確保してください。

## Badge

ドット表示の場合には視覚情報しか持たないため、何らかの形で必ずアクセシブルな名前を与えてください。

```tsx editable
<>
  <Badge dot count={9} />
  <VisuallyHiddenText>通知があります</VisuallyHiddenText>
</>
```

## AccordionPanel

複数のパネルを同時に開くことを許容する `expandableMultiply` propsは、`expandableMultiply={true}` に指定してください。  
`expandableMultiply={false}` の場合、1つのリストを展開するとすでに展開している別のリストが同時に閉じますが、ユーザーが予測・意図していない動きが発生することにつながるため非推奨です。


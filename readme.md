## .NETのWebAssemblyをReactで動かしてみる

* 以下の記事を参考に、.NETのWebAssemblyをReactで動かしてみようとした
  https://learn.microsoft.com/ja-jp/aspnet/core/client-side/dotnet-interop?view=aspnetcore-7.0
* 結果、dev環境での動作はできたが、production開発でのビルドでは動かなかった

## Requirements

* .NET 7
  * `dotnet workload install wasm-tools` もおそらく必要
* Node 16

## Usage

* csharpのwebassemblyの設定  
  * `make setup-cs-wasm`
* reactの設定
  * `make setup-react`
* 開発環境でのreactの実行
  * `make run-react`

## 参考

* .NETのweb assembly
  * https://learn.microsoft.com/ja-jp/aspnet/core/client-side/dotnet-interop?view=aspnetcore-7.0
  * https://qiita.com/yamachu/items/f070ef516c6792ac7e67
* reactの構成
  * https://github.com/oukayuka/Riakuto-StartingReact-ja3.1
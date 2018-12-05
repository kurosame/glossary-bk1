## category

server

## titles

Web Server
Web サーバ

## description

### アーキテクチャ

- マルチプロセスモデル  
  クライアントからの接続ごとにプロセスをフォークして処理する  
  フォークした子プロセスごとにメモリ空間を持つ  
  同時接続数が増えると、その分プロセスも増えるため、メモリ消費が増加する

- マルチスレッドモデル  
  クライアントからの接続ごとにプロセス内にスレッドを生成して処理する  
  スレッドごとにメモリ空間を共有できる  
  マルチプロセスモデルに比べてメモリ消費が少ない  
  マルチプロセスモデルと同様に同時接続数に耐えうるモデルではない（マルチプロセスモデルよりはマシだが、スレッドが増えるため）

- イベント駆動モデル  
  クライアントからの接続ごとにイベントを処理する  
  １プロセス=1CPU なので CPU の数だけプロセスを用意する  
  そのプロセスはワーカープロセスとして作成でき、複数のリクエストを処理できる  
  シングルスレッドでループ処理をまわし、キューに溜まったイベントを処理する  
  メモリ空間が１つ  
  同時接続数が増えてもプロセス・スレッドが増えることはないため、メモリ消費が少ない

### Web Server の機能

ブラウザからのリクエストに対して、動的処理が必要なければ静的コンテンツをブラウザへ返却する  
動的処理が必要であれば、Web アプリケーション（バックエンド）にリクエストを送り、その結果をブラウザへ返却する  
もしくは、Web サーバー上で動的コンテンツを処理して、その結果をブラウザへ返却する  
Apache は動的コンテンツの処理が得意

### ノンブロッキング I/O

処理（I/O）の完了を待たずに次の処理を行う  
前処理の終了はコールバックで受け取る

### リバースプロキシ

クライアントからプロキシサーバーに直接リクエストする一般的なプロキシサーバーとは違い、  
Web サーバーに送られた不特定多数のリクエストを肩代わりするのがリバースプロキシサーバー

Apache にもリバースプロキシの機能はあるが、大量リクエストを捌くのに長けてる Nginx を使う場合が多い  
Nginx をリバースプロキシサーバーとして配置して、Apache を Web サーバーとして配置するやり方も有り

リバースプロキシサーバー内で静的コンテンツをキャッシュ化しておくことで、Web サーバーへリクエストを送らずにキャッシュファイルを返却することもできる  
また、ロードバランサーとして複数の Web サーバーへリクエストを分散することも可能

### C10K 問題（クライアント 1 万台問題）

メモリや CPU の性能上は問題無くても、同時接続数が膨大になると Read/Write の待ちブロックによりリクエストを処理しきれないこと
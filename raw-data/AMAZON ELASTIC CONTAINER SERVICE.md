## category

aws

## titles

Amazon Elastic Container Service
Elastic Container Service
ECS

## description

Docker コンテナを管理できるサービス  
クラスター、サービス、タスクの 3 つの概念をもつ

### タスク（タスク定義）

（複数の）Docker コンテナのリソースや起動方法を定義する  
Docker Compose のようなもの

### サービス

タスクはサービスという単位で管理される  
サービスに配置するタスクやそのタスクの常時起動しておきたい数を指定する  
どのクラスターに配置するかもサービスで指定する  
ネットワークの設定（VPC とセキュリティグループ）や ELB の設定もサービスで行う

### クラスター

タスクまたはサービスの論理グループ

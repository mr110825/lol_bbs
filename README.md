# LOL_BBS
## **サービス概要**
LOL（リーグオブレジェンド）というゲームのキャラクターの説明や操作ガイドをまとめるユーザ投稿型のサービスです。
LOLは使用キャラクターが150を超えるので、全てを把握することは非常に困難です。
ゲームユーザーに対して、それぞれのキャラクターの強みや弱みなどをゲームの知識や情報を共有するコミュニティを提供します。

## **メインのターゲットユーザー**
- 初心者・まだゲームを始めて知識が浅いユーザー
ゲームを始めたばかりで、キャラクターについての知識があまりなく、ゲームを楽しむことができない。

## **ユーザーが抱える課題**
ゲームの情報を獲得することが困難（特に初心者ユーザーにとって）という課題があります。
LOLはMobaと呼ばれるゲームジャンルであるため、既存のゲームと比較して、慣れ親しんでいるユーザーが少ないです。
また、LOLに興味を持っているにも関わらず、ゲーム知識を獲得することが困難であり、ゲーム初心者にとってハードルが高くなっています。
使用キャラクターが150を超えるにも関わらず、それぞれの情報量が多く、キャラクターを把握するだけでも困難です。
（ゲームプレイ期間3年程度の私も自信を持って説明できるキャラクターは２体のみです。）
ゲームの情報を共有するコミュニティも充実しているとは言えない状態なので、情報を獲得することが困難という課題を抱えています。

## **解決方法**
それぞれのキャラクターの説明や操作ガイドをユーザー間で共有することで情報・知識不足を解消します。

## **実装予定の機能**
- ユーザー（会員登録していない）
    - ゲーム情報やキャラクターのガイドを閲覧する
    - 記事をタイトル・タグ・キャラクター毎に検索する
    - 記事にコメントする
- ユーザー（会員登録済み）
    - ゲーム情報やキャラクターのガイドを閲覧する
    - 記事をタイトル・タグ・キャラクター毎に検索する
    - ゲーム情報やキャラクターのガイドを投稿する
    - 自身が投稿した記事のみ「タグ」を設定する
    - 特定の記事をお気に入り登録
    - 特定の記事を「いいね」
    - 記事にコメントする
    - 任意でサモナーネーム（ゲーム内のハンドルネーム）を表示
- 管理ユーザー
    - 投稿記事のCRUD
    - ユーザー（会員登録済み）のCRUD
    - 管理ユーザーのCRUD
    - コメントのCRUD
    - ゲーム情報（アイテムやキャラクター）を編集する

## 実装検討の機能
- ユーザー（会員登録していない）
- ユーザー（会員登録済み）
    - プレイ動画を記事に投稿する
    - 特定のコメントに「いいね」投票
- その他
    - 記事をランキング形式（いいね数・閲覧数ごとなど）で表示

## **なぜこのサービスを作りたいのか？**
個人的に一番思い入れのあるゲームなので、このまま寂れていくのは忍びなく思ったからです。
LOL（リーグオブレジェンド）世界的に有名なゲームですが、Mobaという特殊なゲームジャンルであるためか日本ではあまり流行していません。
日本サーバーもユーザー数も非常に少ない地域として有名です。日本ユーザー間でもユーザー減少が噂になる程です。
私見ですが、ゲームを始めるハードルが高く、初心者が楽しめていない状況が一因ではないかと考えています。
ゲームのコミュニティも数が少なく、ゲームの情報を獲得するだけでも初心者にとってはハードルの高い状態です。
少しでもこのゲームの情報や魅力を知ることができるコミュニティとしてこのサービスを企画しました。

## **画面遷移図**
https://www.figma.com/file/qsxP4XnUUfd5vHApzmImnf/LOL-BBS?node-id=0%3A1
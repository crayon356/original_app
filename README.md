## アプリケーション名
未定

## アプリケーションの概要
*16時間断食のため、16時間後の食事時間の表示
*自分の現状を把握するため、身長、体重、BMIを保存、表示する

## URL
未アップロード

## テスト用アカウント
なし

## 利用方法
身長、体重を記入して保存するをクリックする

## 目指した課題解決
16時間断食を通して、健康促進をはかるため

## 洗い出した要件


## 実装した機能についての説明


## 実装予定の機能
*時間表示機能
*身長、体重の保存
*BMIの計算と保存
*体重、BMIを表示する

## ER図 URL
[![Image from Gyazo](https://i.gyazo.com/f4ddf954f774d211876a0bfef2cc29ad.png)](https://gyazo.com/f4ddf954f774d211876a0bfef2cc29ad)


## テーブル設計
*ユーザー管理機能は未実装

## status

| Column   | Type       | Options                        |
| -------- | ---------  | ------------------------------ |
| height   | integer    | null: false                    |   
| weight   | integer    | null: false                    |
| BMI      | integer    | null: false                    |
| user     | references | null: false, foreign_key: ture |

### Association
has_one :user

## users

| Column   | Type       | Options       |
| -------- | ---------- | ------------- |
| name     | string     | null: false   |
| age      | integer    | null: false   |
| gender   | string     | null: false   |

### Association
belongs_to :user

## ローカルでの動作方法
ruby version 2.6.5
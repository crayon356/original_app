## アプリケーション名
未定

## 




#テーブル設計
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
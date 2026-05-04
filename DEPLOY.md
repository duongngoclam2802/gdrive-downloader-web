# Deploy len GitHub Pages voi ten mien rieng

Du an da duoc cau hinh de build Next.js thanh static site trong thu muc `out`
va deploy bang GitHub Actions.

## 1. Chuan bi truoc khi push

Neu co file cai dat that, dat file vao:

```text
public/downloads/GDriveAdvancedDownloaderSetup.exe
```

Neu chua co file `.exe`, nut tai se chua tai duoc file that.

## 2. Tao repository tren GitHub

Tao repository moi, vi du:

```text
gdrive-downloader-web
```

Sau do push source code len branch `main`.

```bash
git init
git add .
git commit -m "Deploy landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/gdrive-downloader-web.git
git push -u origin main
```

Neu may chua co `git`, cai Git for Windows hoac dung GitHub Desktop.

## 3. Bat GitHub Pages bang Actions

Vao repository tren GitHub:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

Workflow da co san tai:

```text
.github/workflows/deploy.yml
```

Moi lan push len `main`, GitHub se tu chay build va publish website.

## 4. Cau hinh domain rieng

Vao:

```text
Settings -> Pages -> Custom domain
```

Nhap domain cua ban, vi du:

```text
example.com
```

Sau do vao:

```text
Settings -> Secrets and variables -> Actions -> Variables
```

Them variable:

```text
SITE_URL=https://example.com
```

De trong `BASE_PATH` neu dung domain rieng o root domain.

## 5. Cau hinh DNS

Voi domain goc `example.com`, tao 4 ban ghi A:

```text
@ -> 185.199.108.153
@ -> 185.199.109.153
@ -> 185.199.110.153
@ -> 185.199.111.153
```

Neu dung `www.example.com`, tao CNAME:

```text
www -> USERNAME.github.io
```

Khong them ten repository vao gia tri CNAME.

## 6. Bat HTTPS

Sau khi DNS nhan, vao:

```text
Settings -> Pages -> Enforce HTTPS
```

DNS co the mat den 24 gio de cap nhat hoan toan.

## 7. Kiem tra sau deploy

Kiem tra cac duong dan:

```text
https://example.com/
https://example.com/robots.txt
https://example.com/sitemap.xml
https://example.com/og-image.png
```

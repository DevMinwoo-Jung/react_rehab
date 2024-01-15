import { LayoutProps } from '@/app/utils/type/type'
import styles from '@/app/page.module.css'

export default function HomeLayout({
  children,
  modal,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={styles.container}>
        {children}
        {modal}  
        {/* 페럴렐 라우트는 modal로, 일반 라우트는 children */}
      </body>
    </html>
  )
}

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
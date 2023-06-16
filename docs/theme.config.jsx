import {useRouter} from "next/navigation";

export default {
  logo: <span>Styled System</span>,
  project: {
    link: 'https://github.com/The-Code-Monkey/styled-system'
  },
  docsRepositoryBase: "https://github.com/The-Code-Monkey/styled-system/blob/main/docs/pages",
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Styled System'
      }
    }
  },
  primaryHue: 343
}
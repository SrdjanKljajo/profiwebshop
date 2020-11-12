import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Dobrodšli u ProShop',
  description: 'Mi prodajemo najkvalitetnije artikle po najnižim cenama',
  keywords: 'elektronika, mobilni telefoni, lap topovi',
}

export default Meta

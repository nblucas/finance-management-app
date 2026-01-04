import FormHeading from "../components/form-heading/FormHeading";
import ProductRegistrationForm from "../forms/ProductRegistrationForm/ProductRegistrationForm";
import PageContainer from "../layouts/page-container/PageContainer";

export default function ProductRegistration() {
  return (
    <PageContainer>
      <FormHeading label={"Create new product entity"} />
      <ProductRegistrationForm />
    </PageContainer>
  )
}

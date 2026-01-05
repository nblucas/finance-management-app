import FormHeading from "../components/form-heading/FormHeading";
import CategoryRegistrationoForm from "../forms/CategoryRegistrationForm/CategoryRegistrationForm";
import PageContainer from "../layouts/page-container/PageContainer";

export default function CategoryRegistration() {
  return (
    <PageContainer>
      <FormHeading label={"Create new category for expenses"} />
      <CategoryRegistrationoForm />
    </PageContainer>
  )
}

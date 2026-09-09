import type { Metadata } from 'next';
import AdmissionsPage from './_components/admission-page';


export const metadata: Metadata = {
  title: 'Admissions — ICAST Schools, Elebu Ibadan',
  description:
    'Begin your child\'s journey at ICAST Schools. Quality education from Creche through Secondary with day and boarding options. View our admission process, requirements, fees and enquiry form.',
};

export default function AdmissionsRoute() {
  return <AdmissionsPage />;
}
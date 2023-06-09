import styled from "styled-components";

import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0 auto;
  margin-top: 128px;

  max-width: 350px;
  min-height: 400px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 12px;

  border: 1px solid rgb(219, 219, 219);
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  border: 1px solid rgb(219, 219, 219);

  padding: 20px;
`;

export const LinkButton = styled(Link)`
  color: rgb(0, 149, 246);
`;

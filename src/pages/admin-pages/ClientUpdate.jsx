import React from 'react'
import { useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function ClientUpdate() {
  const {t,i18n} = useTranslation();
  return (
    <div>
      <body>
<h1>Edit Amahoro</h1>
<form method="post" th:action="@{/update/{id}(id=${viewClient.id})}">
    <input type="hidden" th:field="${viewClient.id}"/>
    <label>{t('Client Name:')}</label>
    <input type="text" th:field="${viewClient.clientName}"/><br/>
    <label>{t('Phone Number:')}</label>
    <input type="text" th:field="${viewClient.phoneNumber}"/><br/>
    <label>{t('Email:')}</label>
    <input type="text" th:field="${viewClient.email}"/><br/>
    <label>{t('Ticket Class:')}</label>
    <input type="text" th:field="${viewClient.ticketclass}"/><br/>
    <button type="submit">{t('Update')}</button>
</form>

</body>
    </div>
  )
}

export default ClientUpdate

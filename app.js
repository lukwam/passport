(() => {
  'use strict';

  // ——— Company list: filename → display name, sorted alphabetically ———
  const companies = [
    { file: 'amd.png', name: 'amd' },
    { file: 'atlassian.png', name: 'Atlassian' },
    { file: 'avepoint.png', name: 'AvePoint' },
    { file: 'blackduck.png', name: 'BlackDuck' },
    { file: 'cdata.png', name: 'CDataSoftware' },
    { file: 'datadog.png', name: 'datadog' },
    { file: 'datahub.png', name: 'DataHub' },
    { file: 'gitlab.png', name: 'GitLab' },
    { file: 'intel.png', name: 'intel' },
    { file: 'okta.png', name: 'Okta' },
    { file: 'redhat.png', name: 'redhat' },
    { file: 'salesforce.png', name: 'salesforce' },
  ];

  const grid = document.getElementById('qr-grid');

  companies.forEach((company, i) => {
    const card = document.createElement('div');
    card.className = 'qr-card';
    card.style.animationDelay = `${i * 60}ms`;

    const wrapper = document.createElement('div');
    wrapper.className = 'qr-wrapper';

    const img = document.createElement('img');
    img.src = `qr/${company.file}`;
    img.alt = `QR code for ${company.name}`;
    img.width = 180;
    img.height = 180;
    wrapper.appendChild(img);

    const label = document.createElement('div');
    label.className = 'company-name';
    label.textContent = company.name;

    card.append(wrapper, label);
    grid.appendChild(card);
  });
})();

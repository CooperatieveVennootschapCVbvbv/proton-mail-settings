import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { FiltersSection, SpamFiltersSection, RelatedSettingsSection } from 'react-components';

import Page from '../components/Page';

export const getFiltersPage = () => {
    return {
        text: c('Title').t`Filters`,
        route: '/settings/filters',
        icon: 'filter',
        sections: [
            {
                text: c('Title').t`Custom filters`,
                id: 'custom'
            },
            {
                text: c('Title').t`Spam filters`,
                id: 'spam'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const FiltersContainer = ({ setActiveSection }) => {
    return (
        <Page config={getFiltersPage()} setActiveSection={setActiveSection}>
            <FiltersSection />
            <SpamFiltersSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'folder-label',
                        text: c('Info')
                            .t`Go to Folders/labels settings if you want to create and manage mailbox folders and labels.`,
                        link: c('Link').t`Folders/labels settings`,
                        to: '/settings/labels'
                    },
                    {
                        icon: 'auto-reply',
                        text: c('Info')
                            .t`Go to Auto-reply settings if you want to create and manage auto-replys and notify anyone who tries to send you a message while you are out of the office.`,
                        link: c('Link').t`Auto-reply settings`,
                        to: '/settings/auto-reply'
                    }
                ]}
            />
        </Page>
    );
};

FiltersContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default FiltersContainer;

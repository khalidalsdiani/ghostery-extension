/**
 * Priority Support Subscription Component
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2019 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import React from 'react';
import { openSupportPage } from '../../utils/msg';

/**
 * @class Implement Priority Support subview as a React component.
 * The view opens from the left-side menu of the main Subscription view.
 * It allows user to access Priority Support
 * @memberOf SubscriptionComponents
 */
const PrioritySupport = () => (
	<div className="content-subscription s-tabs-panel">
		<div className="row">
			<div className="columns column-subscription">
				<h1>{ t('subscription_priority_support_title') }</h1>
				<div className="status-row">
					<span className="status-value">{ t('subscription_support') }</span>
					<div style={{ marginTop: '20px' }}>
						<span className="status-value blue resubscribe" onClick={openSupportPage}>{ t('subscription_submit_issue') }</span>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default PrioritySupport;

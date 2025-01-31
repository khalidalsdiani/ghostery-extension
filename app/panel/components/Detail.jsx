/**
 * Detail Component
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
import { Route } from 'react-router-dom';
import ClassNames from 'classnames';
import DetailMenu from './DetailMenu';
import Blocking from '../containers/BlockingContainer';
import Rewards from '../containers/RewardsContainer';
/**
 * @class Implement wrapper of the detailed (expert) mode view.
 * @memberOf PanelClasses
 */
class Detail extends React.Component {
	constructor(props) {
		super(props);

		// event bindings
		this.toggleExpanded = this.toggleExpanded.bind(this);
	}

	/**
	 * Lifecycle event
	 */
	componentWillMount() {
		// set default tab / route based on how we got to this view:
		// did the user click the Rewards icon? Or the donut number / Detailed View tab in the header?
		const location = this.props.history.location.pathname;
		if (!location.includes('rewards')) {
			this.props.history.push('/detail/blocking');
		}
	}

	BlockingComponent = () => (<Blocking />);

	RewardsComponent = () => (<Rewards />);

	/**
	 * Click "expertTab" to enable detailed (expert) mode. Trigger action.
	 */
	toggleExpanded() {
		this.props.actions.toggleExpanded();
	}

	/**
	 * Render detailed view wrapper. Part of it is footer
	 * menu allowing to switch between blocking view and one of the
	 * not-yet-implemented-and-pretty-empty-right-now views.
	 *
	 * @return {ReactComponent}   ReactComponent instance
	 */
	render() {
		const condensedToggleClassNames = ClassNames('condensed-toggle', {
			condensed: this.props.is_expanded,
		});
		const { enable_offers, unread_offer_ids } = this.props;

		const activeTab = this.props.history.location.pathname.includes('rewards') ? 'rewards' : 'blocking';

		return (
			<div className="detail-wrap">
				<div id="content-detail" className={(this.props.is_expanded ? 'expanded' : '')}>
					<div className="toggle-bar">
						<div className={condensedToggleClassNames} onClick={this.toggleExpanded} />
					</div>
					<Route path="/detail/blocking" render={this.BlockingComponent} />
					<Route path="/detail/rewards" render={this.RewardsComponent} />
					<DetailMenu
						hasReward={enable_offers && unread_offer_ids.length > 0}
						subscriptionsPlus={this.props.user && this.props.user.subscriptionsPlus}
						activeTab={activeTab}
					/>
				</div>
			</div>
		);
	}
}

export default Detail;

<?php
/**
 * MantisBT - A PHP based bugtracking system
 *
 * MantisBT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * MantisBT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with MantisBT.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright Copyright 2002  MantisBT Team - mantisbt-dev@lists.sourceforge.net
 */

/**
 * Mantis Graph plugin
 */
class BetterStatusColorsPlugin extends MantisPlugin  {

	/**
	 * A method that populates the plugin information and minimum requirements.
	 * @return void
	 */
	function register() {
		$this->name = 'Better status colors';
		$this->description = 'Make the status color more prominent';
		$this->page = '';

		$this->version = '1.0.0';
		$this->requires = array(
			'MantisCore' => '2.0.0',
		);

		$this->author = 'Simone Tellini';
		$this->url = 'https://tellini.info';
	}

	/**
	 * Default plugin configuration.
	 * @return array
	 */
	function config() {
		return array();
	}

	/**
	 * plugin hooks
	 * @return array
	 */
	function hooks() {
		$t_hooks = array(
			'EVENT_LAYOUT_RESOURCES' => 'resources'
		);
		return $t_hooks;
	}

	/**
	 * Include javascript files for chart.js
	 * @return void
	 */
	function resources() {
		echo '<script src="' . plugin_file( "BetterStatusColors.js" ) . '"></script>';
	}
}

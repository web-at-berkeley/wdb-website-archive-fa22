import React, { useState } from 'react';

import { studentData, departmentData } from './Data';

const Test = () => {
	const [name, setName] = useState('');
	const [department, setDepartment] = useState('');
	const [number, setNumber] = useState('');

	const [_classes, setClasses] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const _class = department + ' ' + number;
		setDepartment('');
		setNumber('');
		setClasses([..._classes, _class]);
	};

	return (
		<div style={{ padding: '1rem 10%', display: 'flex' }}>
			<form>
				<h1>Class Selector</h1>
				<label
					htmlFor="name"
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					name: {name}
					<input
						id="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
						style={styles.FormLabel}
					/>
				</label>
				<label
					htmlFor="department"
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					Class Department: {department}
					<select
						id="department"
						value={department}
						onChange={(e) => setDepartment(e.target.value)}
						onBlur={(e) => setDepartment(e.target.value)}
						style={styles.FormLabel}
					>
						<option />
						{departmentData.map((department) => (
							<option key={department} value={department}>
								{department}
							</option>
						))}
					</select>
				</label>
				<label
					htmlFor="number"
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					Class Number: {number}
					<input
						id="number"
						onChange={(e) => setNumber(e.target.value)}
						value={number}
						style={styles.FormLabel}
					/>
				</label>
				<p
					onClick={(e) => handleSubmit(e)}
					style={{ border: '1px solid black', width: '100%' }}
				>
					Submit
				</p>
			</form>
			<div style={{ marginLeft: '3rem' }}>
				<h3>Your Classes</h3>
				{_classes.map((a_class) => (
					<p>{a_class}</p>
				))}
			</div>
			<div style={{ marginLeft: '3rem' }}>
				<h3>Your Have Classes With</h3>
				{studentData.map((student) => {
					const classes_shared = [];
					for (let index = 0; index < _classes.length; index++) {
						const checked_class = _classes[index];
						if (student.classes.includes(checked_class)) {
							classes_shared.push(<p>{checked_class}</p>);
						}
					}
					if (classes_shared.length !== 0) {
						return (
							<div>
								<h5>{student.name}</h5>
								{classes_shared}
							</div>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
};

const styles = {
	FormLabel: {
		width: '100%',
	},
};

export default Test;

import React from "react"
import DashCard from '../../components/DashCard/DashCard'
import { Input, Select } from "antd"
const { Search } = Input
const AllProducts = () => {
	const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const options = []
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		})
	}
	const onSearch = () => {}
	const handleChange = () => {}
	return (
		<>
			<div className="d-flex justify-content-between mt-2 mb-3 ">
				<div className="w-50">
					<Search
						placeholder="Search Product"
						allowClear
						enterButton="Search"
						size="large"
						onSearch={onSearch}
					/>
				</div>

				<Select
					size="large"
					onChange={handleChange}
					placeholder="Sort Products"
					style={{
						width: 200,
					}}
					options={options}
				/>
			</div>
			<DashCard/>
		</>
	)
}

export default AllProducts

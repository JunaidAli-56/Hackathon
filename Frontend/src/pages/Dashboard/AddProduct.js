import { Button, Input, InputNumber, Tooltip } from "antd"
import { FontSizeOutlined } from "@ant-design/icons"
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
	name: 'file',
	multiple: true,
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
	  const { status } = info.file;
	  if (status !== 'uploading') {
		console.log(info.file, info.fileList);
	  }
	  if (status === 'done') {
		message.success(`${info.file.name} file uploaded successfully.`);
	  } else if (status === 'error') {
		message.error(`${info.file.name} file upload failed.`);
	  }
	},
	onDrop(e) {
	  console.log('Dropped files', e.dataTransfer.files);
	},
  };
const AddProduct = () => {
	const onChange = (value) => {
		console.log('changed', value);
	};
	return (
		<div className="d-flex flex-column align-items-center">
			<h1>Add Product</h1>
			<form className="w-50 py-4">
				<div className="row">
					<div className="col-12 mb-2">
						<Input
							size="large"
							placeholder="Name"
							className="p-2"
							prefix={<FontSizeOutlined />}
						/>
					</div>
					<div className="col-12 mb-2">
						<Input
							placeholder="Enter your username"
							prefix={<UserOutlined className="site-form-item-icon p-2" />}
							suffix={
								<Tooltip title="Extra information">
									<InfoCircleOutlined
										style={{
											color: 'rgba(0,0,0,.45)',
										}}
									/>
								</Tooltip>
							}
						/>
					</div>
					<div className="col-9 mb-2">
						<Input prefix="Rs:" suffix="Rupee" className="p-2" />
					</div>
					<div className="col-2 mb-2 ms-3 ">
						<InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} placeholder="Size" />
					</div>
					<div className="col-12 mb-2">
						<Dragger {...props}>
							<p className="ant-upload-drag-icon">
								<InboxOutlined />
							</p>
							<p className="ant-upload-text">Click or drag file to this area to upload</p>
							<p className="ant-upload-hint">
								Support for a single or bulk upload. Strictly prohibited from uploading company data or other
								banned files.
							</p>
						</Dragger>
					</div>
					<div className="col-12 mb-2">
						<Button className="w-100 bg-primary text-white">Add</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddProduct

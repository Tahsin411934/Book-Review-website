import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const PageToRead = () => {
    const datas = useLoaderData();
    console.log(datas);
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = datas;

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="bookName"
                    interval={0} 
                    angle={-10} 
                    height={100} 
                    textAnchor="end" 
                />
                <YAxis />
                <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
                <Tooltip />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    );
};
PageToRead.propTypes = {
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};

export default PageToRead;

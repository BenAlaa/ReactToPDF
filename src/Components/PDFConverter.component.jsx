import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class PDFConverter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            data: {
                title: "Software Engineer",
                name: "Ahmed Alaa"
            }
    
         }
        this.styles = StyleSheet.create({
            page: {
              flexDirection: 'row',
              backgroundColor: '#E4E4E4'
            },
            section: {
              margin: 10,
              padding: 10,
              flexGrow: 1
            }
          });
    }
    handleChange({currentTarget: input}) {
        const {data} = this.state;
        const {name, value} = input;
        data[name] = value;
        this.setState({data});
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="label">Name</label>
                        <input type="text" name="name" value={this.state.data.name} onChange={this.handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="label">Title</label>
                        <input type="text" name="title" value={this.state.data.title} onChange={this.handleChange} className="form-control"/>
                    </div>
                </div>
                <Document>
                    <Page size="A4" style={this.styles.page}>
                        <View style={this.styles.section}>
                            <Text>{this.state.data.name}</Text>
                        </View>
                        <View style={this.styles.section}>
                            <Text>{this.state.data.title}</Text>
                        </View>
                    </Page>
                </Document>
            </div>
            
         );
    }
}
 
export default PDFConverter;